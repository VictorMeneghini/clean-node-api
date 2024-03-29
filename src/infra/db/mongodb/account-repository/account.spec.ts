import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountsCollection = await MongoHelper.getCollection('accounts')
    await accountsCollection.deleteMany({})
  })
  test('Should return account on success', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'valid_name',
      email: 'validemail@mail.com',
      password: 'any_password'
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('valid_name')
    expect(account.email).toBe('validemail@mail.com')
    expect(account.password).toBe('any_password')
    expect(account.name).toBe('valid_name')
  })
})
