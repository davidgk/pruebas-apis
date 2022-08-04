import {initializeDb, mockResponse} from "../initializerTest";
import {signup} from '../../src/controllers/auth.controller'
import {expect} from 'chai'

describe('auth controller', () => {
    before(async () => {
        await initializeDb();
    })
    describe('signUp', () => {
        let req, res;
        beforeEach(() => {
            req = { body: {
                    username: 'aUser' + new Date().getMilliseconds(),
                    email: 'aUser' + new Date().getMilliseconds() + '@gmail.com',
                    password: 'aPass',
                }
            };
            res = mockResponse()
        })
        describe('without roles', () => {
            it('with all params can create a user and retrieve a token', async () => {
                const result=  await signup(req, res)
                expect(result).to.eq(1);
            });

        });
    });
});
