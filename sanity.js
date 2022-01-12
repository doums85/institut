import { createClient, createImageUrlBuilder } from "next-sanity"
const projetId = process.env.PROJET_ID;
const dataset = process.env.DATASET;
const apiVersion = process.env.API_VERSION

const config = {
    dataset: dataset,
    projectId: projetId,
    apiVersion: apiVersion,
  useCdn: process.env.NODE_ENV === "development",
}
export const urlFor = (source) => createImageUrlBuilder(config).image(source)


export const sanityClient = createClient(config)