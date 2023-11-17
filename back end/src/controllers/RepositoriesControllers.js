const User = require("../models/User");
const Repository = require("../models/Repository");

async function RepositoriesController(request, response) {
  const { user_id } = request.params;
  const q = request.query;

  try {
    const user = await User.findById(user_id);

    if (!user) {
      return response.status(404).json();
    }

    // let query = {};

    // if(q) {
    //   query = { url: {$regex: q} }
    // }

    const repositories = await Repository.find({
      userId: user_id,
      // ...query
    }); 

    console.log(repositories)

    return response.status(200).json(repositories);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error." });
  }
}     

async function CreateRepository(request, response) {
  const { user_id } = request.params;
  const { name, url } = request.body;

  try {
    const user = await User.findById(user_id);

    if (!user) {
      return response.status(404).json();
    }

    const repository = await Repository.findOne({
      userId: user_id,
      name,
    });

    if (repository) {
      return response
        .status(422)
        .json({ message: `Repository ${name} already exist` });
    }

    const newRepository = await Repository.create({
      name,
      url,
      userId: user_id,
    });

    return response.status(201).json(newRepository);
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
}

async function DestroyRepository(request, response) {
  const { user_id, id } = request.params;

  try { 
    const user = await User.findById(user_id);

    if (!user) {
      return response.status(404).json();
    }

    const repository = await Repository.findOneAndDelete({
      userId: user_id,
      id, 
    });
    
    if (!repository) {
      return response.status(404).json();
    }

    response.status(200).json();
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  RepositoriesController,
  CreateRepository,
  DestroyRepository,
};
