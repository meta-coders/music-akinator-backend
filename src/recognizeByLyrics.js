'use strict';

const url = require('url');
const request = require('request');

const { AUDD_API_TOKEN, AUDD_URL, DEEZER_URL } = process.env;

const STATUS_SUCCESS = 'success';
const AUDD_REQUEST_URL = new url.URL('/findLyrics', AUDD_URL);
const DEEZER_REQUEST_URL = new url.URL('/search/track', DEEZER_URL);

const normalize = query => query.replace(
  // AUDD returns full_title with %C2%A0 instead of %20(space)
  decodeURIComponent('%C2%A0'),
  decodeURIComponent('%20')
);

const findByLyrics = query => new Promise(resolve => {
  request({
    uri: AUDD_REQUEST_URL,
    qs: {
      q: query,
      api_token: AUDD_API_TOKEN,
    },
  }, (err, res, body) => {
    if (err) {
      resolve();
    } else {
      const { status, result } = JSON.parse(body);
      if (status !== STATUS_SUCCESS) {
        resolve();
      } else {
        resolve(result);
      }
    }
  });
});

const findTrack = query => new Promise(resolve => {
  request({
    uri: DEEZER_REQUEST_URL,
    qs: { q: query },
  }, (err, res, body) => {
    if (err) {
      resolve();
    } else {
      const { data } = JSON.parse(body);
      resolve(data);
    }
  });
});

const recognizeByLyrics = async (req, reply) => {
  const { query } = req.query;

  const recognitionResult = await findByLyrics(query);
  if (!recognitionResult) {
    reply.status(500).send();
    return;
  }

  const [songInfo] = recognitionResult;
  const deezerResult = await findTrack(normalize(songInfo['full_title']));
  if (!deezerResult) {
    reply.status(500).send();
    return;
  }

  const [song] = deezerResult;
  reply.send({ deezerId: song.id });
};

module.exports = recognizeByLyrics;
