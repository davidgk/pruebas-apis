import '../initializerTest'
import { signup } from '../../src/controllers/auth.controller'
import {expect} from "chai";

describe('auth controller', () => {

    describe('signUp', () => {
        let req, res;
        beforeEach(() => {
            req = { body: {
                    username: 'aUser' + new Date().getMilliseconds(),
                    email: 'aUser' + new Date().getMilliseconds() + '@gmail.com',
                    password: 'aPass',
                }
            };
            res = { status : 200, json: (val) => val }
        })
        describe('without roles', () => {
            it('with all params can create a user and retrieve a token', async () => {
                const result=  await signup(req, res)
            });

        });
    });
});
