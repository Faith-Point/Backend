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
      FaithPoint: {
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
          address: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          religion: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          contact: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          socialMedia: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
        }      
      },
      FaithPointImage: {
        type: 'object',
        properties: {
          faith_point: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          url: {
            type: 'string',
            maxLength: 255,
          },
        },        
      },
      FaithPointSchedule: {
        type: 'object',
        properties: {
          faith_point: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          date: {
            type: 'string',
            format: 'date',
          },
          start_time: {
            type: 'string',
            format: 'time',
          },
          end_time: {
            type: 'string',
            format: 'time',
          },
        },  
        example: {
          faith_point: {
            id: 'uuid',
          },
          date: '2024-06-02',
          start_time: '2024-06-02T15:00:00',
          end_time: '2024-06-02T15:00:00',
        }      
      },
      FaithPointService: {
        type: 'object',
        properties: {
          faith_point: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
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
      FaithPointSubscription: {
        type: 'object',
        properties: {
          faith_point: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                maxLength: 32,
              }
            }
          },
          is_active: {
            type: 'boolean',          
          }
        },        
      },
    },
  },
};

export default swaggerComponents;
