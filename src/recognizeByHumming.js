'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const fsPromises = fs.promises;

const uuidv4 = require('uuid/v4');
const request = require('request');

const TMP_DIR = os.tmpdir();
const { AUDD_API_TOKEN, AUDD_URL } = process.env;

const recognizeByHumming = async (req, reply) => {
  const randomHash = uuidv4();
  const tmpFilePath = path.join(TMP_DIR, randomHash);

  const onEnd = err => {
    if (err) {
      reply.code(500).send();
      return;
    }

    const readFileStream = fs.createReadStream(tmpFilePath);
    const data = {
      api_token: AUDD_API_TOKEN,
      return: 'deezer',
      file: readFileStream,
    };
    const options = { uri: AUDD_URL, formData: data };

    request.post(options, async (err, res, body) => {
      await fsPromises.unlink(tmpFilePath);

      if (err) {
        reply.code(500).send();
        return;
      }

      const { status, result } = JSON.parse(body);

      if (status !== 'success') {
        reply.code(500).send();
        return;
      }

      const deezerId = result.deezer && result.deezer.id;
      reply.send({ deezerId });
    });
  };

  const handler = (field, file) => {
    const writeFileStream = fs.createWriteStream(tmpFilePath);
    file.pipe(writeFileStream);
  };

  const mp = req.multipart(handler, onEnd);
};

module.exports = recognizeByHumming;
