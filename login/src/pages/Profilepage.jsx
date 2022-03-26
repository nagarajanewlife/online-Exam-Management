import {
  chakra,
  Container,
  Heading,
  Input,
  Select,
  Stack,
  FormControl,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import { Navbar } from "../components/Navbar";
function Profilepage() {
  const { currentUser } = useAuth();
  console.log("currentUser", currentUser.displayName);
  return (
    <>
      <Layout>
        <Heading style={{ color: "white" }}>Profile page </Heading>

        <Image
          borderRadius="full"
          boxSize="150px"
          src={currentUser.photoURL}
          alt="Profile pic"
        />

        <Container maxW="container.lg" overflowX="auto" py={4}>
          <Stack spacing={3}>
            <label>Date Of Birth (dd/mm/yyy)</label>
            <Input
              type="text"
              placeholder="Phone number"
              value={currentUser.displayName}
            />
            <Input
              type="text"
              placeholder="Phone number"
              value={currentUser.email}
              isDisabled
            />

            <Input type="date" placeholder="Phone number" />

            <Input type="tel" placeholder="Phone number" />
            <Select placeholder="Select Course">
              <option value="Police">Police</option>
              <option value="TET">TET</option>
              <option value="option3">TNPSC</option>
              <option value="Group1">Group 1</option>
              <option value="Group2">Group 2</option>
              <option value="Group3">Group 3</option>
            </Select>
            <Button colorScheme="teal" size="lg">
              Submit
            </Button>
          </Stack>
        </Container>
      </Layout>
    </>
  );
}
export default Profilepage;
