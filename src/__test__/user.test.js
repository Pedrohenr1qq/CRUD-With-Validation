// Dependencies
const request = require('supertest');

// Internal Requires
const app = require('../../index');

// Start the server and database
beforeAll(() => {
  app.listen(3000, () => console.log("Server running"));
});

// Check all CRUD, login and validate routes
describe('User API', ()=>{ 
  let userId, userToken;

  // CREATE Route --> Check if a new user was created sucessfully
  it('should create a new user', async ()=>{
    const response = await request(app)
    .post('/user/create').send({
      name: "Thiago",
      email: "thiagoenes@gmail.com",
      password: "999333555abc"
    })

    userId = response.body._id;
    userToken = response.body.token;

    expect(response.statusCode).toEqual(201);
    expect(response.body.name).toBe('Thiago');
    expect(response.body.email).toBe('thiagoenes@gmail.com');
    expect(response.body.password).toBe('999333555abc');
  });

  // Login Route --> Check if a user LOGIN is valid
  it('should be a valid login', async ()=>{
    const response = await request(app)
    .post('/login').send({
      email: "thiagoenes@gmail.com",
      password: "999333555abc"
    })

    expect(response.statusCode).toEqual(200);
    expect(response.body.name).toBe('Thiago');
  });

  // Validate Route --> Check if a user TOKEN is valid 
  it('should be a valid token', async ()=>{
    const response = await request(app)
    .get('/validate')
    .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.user.name).toBe('Thiago');
    expect(response.body.user.email).toBe('thiagoenes@gmail.com');
    expect(response.body.user.password).toBe('999333555abc');
  });

  // READ Route --> Check if a user exist 
  it('should find a user', async ()=>{
    const response = await request(app).get(`/user/find/${userId}`)

    expect(response.statusCode).toEqual(200);
    expect(response.body.name).toBe('Thiago');
  });

  // UPDATE Route --> Check if a user was updated sucessfully
  it('should update a user', async ()=>{
    const response = await request(app)
    .put(`/user/update/${userId}`)
    .send({
      name: 'Thiago Elias',
      email: "thiagoenes@gmail.com",
      password: "999333555abc"
    })

    expect(response.statusCode).toEqual(200);
    expect(response.body.name).toBe('Thiago Elias');
  });

  // DELETE Route --> Check if a user was deleted sucessfully
  it('should delete a user ', async()=>{
    const response = await request(app).delete(`/user/delete/${userId}`)

    expect(response.statusCode).toEqual(200);
  });

})