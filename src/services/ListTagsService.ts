import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class ListTagsService {
  async execute() {
    const tagRepositories = getCustomRepository(TagsRepository)

    const tags = await tagRepositories.find()

    return classToPlain(tags)
  }
}

export { ListTagsService }
