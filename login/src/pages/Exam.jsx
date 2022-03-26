import { chakra, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Radio } from "antd";

import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import { Navbar } from "../components/Navbar";
function Exam() {
  const { currentUser } = useAuth();
  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Layout>
        <Heading style={{ color: "white" }}>Online Exam </Heading>
        <Container maxW="container.lg" overflowX="auto" py={4}>
          <chakra.pre p={4}>
            இந்தியாவின் தேசிய வருமானத்தில் முக்கிய பங்கு வகிப்பது?
            <br />
            <Radio.Group onChange={onChange} value={value}>
              <Radio style={{ color: "white" }} value={1}>
                தொலைக்காட்சி
              </Radio>
              <Radio style={{ color: "white" }} value={2}>
                தொழிற்சாலை
              </Radio>
              <Radio style={{ color: "white" }} value={3}>
                சுற்றுலா
              </Radio>
              <Radio style={{ color: "white" }} value={4}>
                வேளாண்மை
              </Radio>
            </Radio.Group>
          </chakra.pre>
          <chakra.pre p={4}>
            இந்தியாவின் தேசிய வருமானத்தில் முக்கிய பங்கு வகிப்பது?
            <br />
            <Radio.Group onChange={onChange} value={value}>
              <Radio style={{ color: "white" }} value={1}>
                தொலைக்காட்சி
              </Radio>
              <Radio style={{ color: "white" }} value={2}>
                தொழிற்சாலை
              </Radio>
              <Radio style={{ color: "white" }} value={3}>
                சுற்றுலா
              </Radio>
              <Radio style={{ color: "white" }} value={4}>
                வேளாண்மை
              </Radio>
            </Radio.Group>
          </chakra.pre>
        </Container>
      </Layout>
    </>
  );
}
export default Exam;
