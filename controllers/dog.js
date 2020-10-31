const Dog = require("../models/dog");
const { Router } = require("express");
const router = Router();

router.get("/seed", (req, res) => {

    const Dogs = [
      { name: "spot", age: 5 },
      { name: "buxter", age: 10 }
    ];

     const data = await Dog.create(Dogs);
     res.json(data);
});

//index route
router.get("/", async (req, res) => {
  res.json(await Dog.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Dog.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Dog.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
