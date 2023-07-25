// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false
  }
}

const proxy = httpProxy.createProxyServer()
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  req.headers.cookie = ''

  // khi thag client req len6 nextJs proxy gui len server ,
  // selfHandleResponse = false server không xử lý tra3 ve respone thag cho client luon
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false
  })
}
