export const swaggerComponents = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      Auth: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email',
            maxLength: 255,
          },
          password: {
            type: 'string',
            maxLength: 255,
          },
        },        
      },
      Logout: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email',
            maxLength: 255,
          },        
        }
      },
      RefreshToken: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            format: 'email',
            maxLength: 255,
          },
          refreshToken: {
            type: 'string',
            maxLength: 255,
          },
        },        
      },
      Country: {
        type: 'object',
        properties: {
          short_name: {
            type: 'string',
            maxLength: 2,
          },
          long_name: {
            type: 'string',
            maxLength: 32,
          },
          code: {
            type: 'string',
            maxLength: 32,
          },
        },        
      },
      State:{
        type: 'object',
        properties: {
          short_name: {
            type: 'string',
            maxLength: 2,
          },
          long_name: {
            type: 'string',
            maxLength: 32,
          },
          code: {
            type: 'string',
            maxLength: 32,
          },
          country: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
        },        
      },
      City: {
        type: 'object',
        properties: {
          short_name: {
            type: 'string',
            maxLength: 2,
          },
          long_name: {
            type: 'string',
            maxLength: 32,
          },
          code: {
            type: 'string',
            maxLength: 32,
          },
          state: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
        },
      },
      Address: {
        type: 'object',
        properties: {
          street: {
            type: 'string',
            maxLength: 255,
          },
          number: {
            type: 'string',
            maxLength: 32,
          },
          complement: {
            type: 'string',
            maxLength: 255,
          },
          neighborhood: {
            type: 'string',
            maxLength: 255,
          },
          city: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
        },        
      },
      Role: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 32,
          },
          description: {
            type: 'string',
            maxLength: 255,
          },
        },        
      },
      User: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 255,
          },
          email: {
            type: 'string',
            format: 'email',
            maxLength: 255,
          },
          password: {
            type: 'string',
            maxLength: 255,
          },
          role: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          address: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
        },        
      },
      LogAuth: {
        type: 'object',
        properties: {
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          token: {
            type: 'string',
            maxLength: 255,
          },
        },
      },
      SocialMedia: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 32,
          },
          description: {
            type: 'string',
            maxLength: 255,
          },
          link: {
            type: 'string',
            maxLength: 255,
          },
          icon: {
            type: 'string',
            maxLength: 255,
          },
        },        
      },
      Contact: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 255,
          },
          email: {
            type: 'string',
            format: 'email',
            maxLength: 255,
          },
          phone: {
            type: 'string',
            maxLength: 32,
          },
        },        
      },
      FaithPointReligions: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 255,
          },
          description: {
            type: 'string',
            maxLength: 255,
          },
        },        
      },
    },
  },
};

export default swaggerComponents;
