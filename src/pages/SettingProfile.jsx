import React from 'react'
import Layout from '../components/Layout'
import UserInfoAction from '../components/UserProfile'
import { Flex, Paper, useMantineColorScheme } from '@mantine/core'

const SettingProfile = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
  return (
    <>
      <Layout>
      <div className="py-10 sm:px-5 px-1 ">
        
        
        <Paper
          radius={"md"}
          shadow="md"
          className="p-[20px]"
          bg={dark ? "#1B1B1B" : "white"}
        >
<Flex   direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}>
        <UserInfoAction/>
        </Flex>

        </Paper>
      </div>
        
      </Layout>
    </>
  )
}

export default SettingProfile
