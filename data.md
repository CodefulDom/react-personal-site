# Creation and Prisma and Graphql Yoga Workflow
1. Add Types to the **`/backend/datamodel.prisma`** and then run your deployment
2. The deployment brings down a new **`/backend/src/generated/prisma.graphql`** which was generated by prisma.
3. Now go into your **`backend/src/schema.graphql`** this is the public facing API and how React interacts with prisma. Keep in mind that if you have a large number of fields in your mutation that you have access to use [this](https://drops.codefuldom.com/X6uDnLzP) instead of typing all that out
4. Now you need to add your resolvers in the **`backend/src/resolvers/Mutation.js`** and** `backend/src/resolvers/Query.js`** You can add  `async` and `await` on the resolvers method but be sure to add the info param on the method.