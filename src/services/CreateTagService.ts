import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

interface IRequestTag {}

class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepository)

    if (!name) throw new Error("A name is required")

    const tagAlreadyExists = await tagsRepository.findOne({ name })

    if (tagAlreadyExists) throw new Error("Tag already exists")

    const tag = tagsRepository.create({ name })

    tagsRepository.save(tag)

    return tag
  }
}

export { CreateTagService }
