import { Hono } from 'hono'
import { serve } from 'bun'
import crypto from 'crypto'

const app = new Hono()

// Simple API key check middleware
const apiKey = process.env.API_KEY || (() => {
  const key = crypto.randomUUID()
  console.log('Generated new API key (store in .env):', key)
  return key
})()

app.use('*', async (c, next) => {
  const auth = c.req.header('Authorization')
  if (auth !== `Bearer ${apiKey}`) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  await next()
})

app.get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }))

app.get('/stream', (c) => {
  // Placeholder for SSE stream
  return c.text('SSE endpoint ready (implement event streaming here)')
})

console.log('Hermes Mobile Bridge starting on Tailscale interface...')
serve({
  fetch: app.fetch,
  port: 3000,
  hostname: '0.0.0.0' // Bind to all for Tailscale routing (restrict via Tailscale ACLs)
})
