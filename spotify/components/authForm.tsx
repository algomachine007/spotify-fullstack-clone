import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

import Image from "next/image";
import { auth } from "../lib/mutations";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";

const initialState = {
  email: "",
  password: "",
};

const AuthForm = ({ mode }) => {
  const [isLoading, setisLoading] = useState<Boolean>(false);

  const [data, setData] = useState(initialState);

  const { email, password } = data;

  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    console.log("email", email);
    const user = await auth(mode, { email, password });

    setisLoading(false);

    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="1px solid white"
      >
        {mode === "signup" ? (
          <p style={{ color: "white" }}>Signup</p>
        ) : (
          <p style={{ color: "white" }}>Signin</p>
        )}
        <Image src="/spotify.png" height={60} width={120} />
      </Flex>

      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
            />
            <Input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
            />

            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
