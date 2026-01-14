// lib/sanity.js - SIMPLIFIED VERSION
import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

// Create the client with CORRECT settings
export const client = createClient({
  projectId: 've1ou5d2', // Replace with yours
  dataset: 'production', // Your dataset name
  apiVersion: '2026-01-11', // Use current date
  useCdn: true,
})

// Updated image helper
export function urlFor(source) {
  return createImageUrlBuilder(client).image(source)
}