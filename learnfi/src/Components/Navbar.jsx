
import { ReactNode, useContext, useState } from "react";
// import AllRoutes from "../Routes/AllRoutes";
import Footer from './Footer'
import { Navlink, Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Spacer,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Context/AuthContextProvider";
import {getdata} from '../Index/Index'
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
const links = [
  { path: "/", title: "Home" },
  { path: "/Courses", title: "Courses" },
  { path: "/Institutes", title: "Institutes" },
  { path: "/Students", title: "Students" },
  { path: "/Analytics", title: "About" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {Logout} = useContext(AuthContext)
  const [search,setSearch] = useState('')


  const handelSearch = (e) => {
    setSearch(e.target.value)

    return fetch(`http://localhost:8080/Courses?q=${e.target.value}`)
    .then((res) =>res.json())
    .then((data) => {
      getdata(data)
    })
  }

  const activestyle = {
    color: "red",
  };

  const defaultstyle = {
    color: "black",
  };
  return (
    <>
      <Box>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex
            h={16}
            ml={20}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box style={{ width: "70px" }}>
              <img
                src="https://o.remove.bg/downloads/4ff87125-118a-45b7-8ba4-6ae862a33a13/LEARNI_FI2-removebg-preview.png"
                alt=""
              />
            </Box>

            {/* <Box style={{border:'2px solid', 
          alignItems:'center', justifyContent:'space-evenly'}}>
               {
                 links.map((e) => {
                    return <Link style={{border:'1px solid'}} key={e.path} to={e.path}>{e.title}</Link>
                })
               }
          </Box> */}
            <Box
              style={{
                // border: "5px solid",
                alignItems: "center",
                justifyContent: "space-between",
                // margin: "auto",
                fontSize: "20px",
                width: "700px",
                marginLeft: "-100px",
              }}
            >
              {links.map((e, index) => {
                return (
                  <Link
                    // style={ ()=>(
                    //   return
                    // )}
                    style={{
                      activestyle,
                      marginRight: index !== links.length - 1 ? "50px" : "0",
                    }}
                    key={e.path}
                    to={e.path}
                  >
                    {e.title}
                  </Link>
                );
              })}
            </Box>
            <Box>
              <Input
                placeholder="Search Bar" value={search} onChange={handelSearch}
                style={{
                  border: "2px solid",
                  width: "300px",
                  marginRight: "-100px",
                  
                }}
                htmlSize={4}
                width="auto"
              />
            </Box>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7} mr={20}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={""}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          ""
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />

                        <Link to={`/login`}>
                        <MenuItem>login</MenuItem>
                        </Link>
                    
                    <Link to={`/signup`}><MenuItem>Sing up</MenuItem></Link>
                    <MenuItem onClick={() => Logout(true)}>Logout</MenuItem>
                    
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>

      
    </>
  );
}
