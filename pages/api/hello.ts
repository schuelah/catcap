// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var request = require('request');
import axios from 'axios';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  if (!body.name) {
    return res.status(500).json({ msg: 'Task Name not supplied.' });
  }
  //res.status(200).json({ name: 'Ares' });
  let date = updateClient();
  res.status(200).json({ body: date });
}

async function updateClient() {
  var clientServerOptions = {
    uri: 'http://localhost',
    port: 4200,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let dataRes = await request(clientServerOptions, function (error, response) {
    console.log(error, response.data[0]);
    return response.data[0].token;
  });
}