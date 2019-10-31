// Configuração do multer(upload de imagem)
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    // pasta que nosso arquivo vai
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    // como vamos formatar o arquivo
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
