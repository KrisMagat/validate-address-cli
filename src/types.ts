// this is the shape of addressObject (for Typescript)
export type addressObject = {
  street: string,
  city: string,
  zipcode: string
};

// this is the shape of apiObject (for Typescript)
export type apiObject = { 
  result: {
    deliveryLine1: string,
    components: { 
      cityName: string,
      zipCode: string,
      plus4Code: string
    },
    analysis: {
      enhancedMatch: string
    }
  }[]
};