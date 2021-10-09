const app = require("../index");
const mongoose = require("mongoose");
const supertest = require("supertest");
const { checkJwt } = require("../auth/check-jwt");

const uri ="mongodb+srv://Oktay:Oktay1299@cluster0.2b8po.mongodb.net/freeMarket?retryWrites=true&w=majority"

beforeEach((done) => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
      () => done());
  });
  
// afterEach((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done());
//   });
// });

// test("POST end point testing '/products'", async () => {
//     const body ={canton:"Aargau",title:"T-shirt"}
//     try {
//       await supertest(app)
//         .post("/products")
//         .set('Authorization',checkJwt)
//         .set('Content-type','application/json')
//         .send({body})
//         .expect(200)
//         .then((response) => {  console.log(response.body)
//           // Check type and length
//           expect(Array.isArray(response.body)).toBeTruthy();
//           expect(response.body.length).toEqual(1);
  
//           // Check data
//           //expect(response.body[0]._id).toBe(post.id);
//           //expect(response.body[0].title).toBe(post.title);
//           //expect(response.body[0].content).toBe(post.content);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   },10000);
 

test("GET end point testing '/products'", async () => {
  try {
   return await supertest(app)
      .get("/products")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);

        // Check data
        expect(response.body[0]._id).toBe("60f4630d3fceebc2a58089c0");
        expect(response.body[0].canton).toBe("Zug");

      });
  } catch (error) {
   return console.log(error);
  }
},10000);

test("GET FILTER end point testing '/products/filter'", async () => {
    try {
     return await supertest(app)
        .get(`/products/filter`)
        .query({canton:"Zug"})
        .expect(200)
        .then((response) => {
          // Check type and length
          expect(Array.isArray(response.body)).toBeTruthy();
          expect(response.body.length).toEqual(1)
  
          // Check data
          expect(response.body[0]._id).toBe("60f4630d3fceebc2a58089c0");
          expect(response.body[0].canton).toBe("Zug");
        });
    } catch (error) {
     return console.log(error);
    }
  },10000);


  test("GET end point testing '/wishes'", async () => {
    try {
     return await supertest(app)
        .get("/products")
        .expect(200)
        .then((response) => {
          // Check type and length
          expect(Array.isArray(response.body)).toBeTruthy();
          expect(response.body.length).toEqual(1);
  
          // Check data
          expect(response.body[0]._id).toBe("60f4630d3fceebc2a58089c0");
          expect(response.body[0].canton).toBe("Zug");
  
        });
    } catch (error) {
     return console.log(error);
    }
  },10000);
  
  test("GET FILTER end point testing '/wishes/filter'", async () => {
      try {
       return await supertest(app)
          .get(`/products/filter`)
          .query({canton:"Zug"})
          .expect(200)
          .then((response) => {
            // Check type and length
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toEqual(1)
    
            // Check data
            expect(response.body[0]._id).toBe("60f4630d3fceebc2a58089c0");
            expect(response.body[0].canton).toBe("Zug");
          });
      } catch (error) {
       return console.log(error);
      }
    },10000);
  