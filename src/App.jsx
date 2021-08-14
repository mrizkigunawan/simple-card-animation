import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Wrapper from "./components/Wrapper.jsx";
import Container from "./components/Container.jsx";
import Grid from "./components/Grid.jsx";
import Box from "./components/Box.jsx";
import Overlay from "./components/Overlay.jsx";
import Bigbox from "./components/Bigbox.jsx";

function App() {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const toggleNumber = (number) => setSelectedNumber(number);

  return (
    <Wrapper>
      <Container>
        <AnimateSharedLayout type="crossfade">
          <Grid>
            {numbers.map((number) => (
              <Box key={number} number={number} toggleNumber={toggleNumber} />
            ))}
          </Grid>
          <AnimatePresence>
            {selectedNumber && (
              <Overlay>
                <Bigbox
                  selectedNumber={selectedNumber}
                  toggleNumber={toggleNumber}
                />
              </Overlay>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Container>
    </Wrapper>
  );
}

const numbers = [1, 2, 3, 4];

export default App;
