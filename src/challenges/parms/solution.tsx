function updateUserRoute({body, params}) {
  updateUserController({body, params});
}

function updateUserController({data, params}) {

  const { data, params } = user;

  userRepository.update({
    data,
    params,
  });
}

const userRepository = {
  update: ({ data, params }) => {},
};
