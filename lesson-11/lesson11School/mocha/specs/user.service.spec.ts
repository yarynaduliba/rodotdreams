import { DbService } from 'src/db.service';
import { UserService } from '../src/user.service';
import { stubConstructor } from 'ts-sinon';
import { expect } from 'chai';
import { User } from 'src/user.dto';
import * as sinon from 'sinon';


describe('user service', () => {
    let userService: UserService;
    const mockedDbConnection = stubConstructor(DbService);

    beforeEach(() => {
        userService = new UserService(mockedDbConnection);
    });

    afterEach(() => {
        mockedDbConnection.find.reset();
        mockedDbConnection.update.reset();
        mockedDbConnection.selectAll.reset();

        // Restore all spies and stubs;
        sinon.restore();
    });


    it('find user', async () => {
        const expectedResult: User = {
            id: 1,
            name: 'John',
            age: 20
        };
        mockedDbConnection.find.resolves(expectedResult);
        const user = await userService.find(1);
        expect(user.id).to.equal(1);
        expect(user).to.deep.equal(expectedResult);
    });

    // it('find users older than 30', async () => {
    //     const expectedResult: User = {
    //         id: 1,
    //         name: 'John',
    //         age: 20
    //     };
    //     mockedDbConnection.find.resolves(expectedResult);

    //     const user = await userService.find(1);

    //     expect(user.id).to.equal(1);
    //     expect(user).to.deep.equal(expectedResult);
    // });

    it('find users older than 30', async () => {
        const expectedResult: User[] =  [
            {
                id: 1,
                name: 'John',
                age: 20
            },
            {
                id: 2,
                name: 'John',
                age: 40
            }
        ];
        mockedDbConnection.selectAll.resolves(expectedResult);

        const users = await userService.findOlder(30);

        expect(users.every(user => user.age ? user.age > 30 : false)).to.be.true;
    });

    it('test spy', async () => {
        const dbService = new DbService();
        const spy = sinon.spy(dbService, 'update');
        const testUserService = new UserService(dbService);

        await testUserService.update(1, {age: 25} as User);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(1, {age: 25} as User)).to.be.true;

    });

    // it('test spy console.log', async () => {
    //     const dbService = new DbService();
    //     const consolSpy = sinon.spy(console, 'log');
    //     const testUserService = new UserService(dbService);

    //     await testUserService.update(1, {age: 25} as User);

    //     expect(consolSpy.calledOnce).to.be.true;
    //     expect(consolSpy.calledWith('updating user with id = 1 with data { age: 25}')).to.be.true;
    // });

    it('test spy console.log', async () => {

        const consolSpy = sinon.spy(console, 'log');
        const dbService = new DbService();
        const testUserService = new UserService(dbService);

        const data = { name: 'Jane Doe'} as User;
        const id = 1;
        await testUserService.update(1, {  name: 'Jane Doe' } as User);

        expect(consolSpy.calledWith(`updating user with id = ${id} with data ${data}`)).to.be.true;
        consolSpy.restore;
    });
});
