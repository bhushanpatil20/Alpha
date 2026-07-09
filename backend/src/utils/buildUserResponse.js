const buildUserResponse = (user) => {

    return {

        id: user._id,

        fullName: user.fullName,

        email: user.email,

        role: user.role,

        avatar: user.avatar,

        isVerified: user.isVerified,

        createdAt: user.createdAt

    };

};

export default buildUserResponse;