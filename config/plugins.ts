export default ({ env }) => {
  return {
    email: {
      // provider: 'nodemailer',
      provider: 'strapi-provider-email-nodemailer',
      providerOptions: {
        host: 'localhost',
        port: 1025,
        ignoreTLS: true,
      },
    },
  };
};
