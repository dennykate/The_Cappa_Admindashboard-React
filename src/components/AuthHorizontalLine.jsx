import { Divider } from '@mantine/core'
import React from 'react'

const AuthHorizontalLine = ({dark}) => {
  return (
    <Divider
            label="Or continue with "
            labelPosition="center"
            mt="lg"
            className="text-base text-white"
            // sx={{
            //   ["& .mantine-Divider-label"]: {
            //     color: dark ? "#F8F5F0" : "grey",
            //     fontSize: "16px",
            //   },
          // }}
            classNames={{label:`${dark?"#F8F5F0" : "grey"} sm:text-base text-sm`}}
          />
  )
}

export default AuthHorizontalLine