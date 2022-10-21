import React from 'react';
import {Box, Text, VStack, Button} from 'native-base';
import {COLORS} from '../../utils/Colors';

export default function HomeMainScreen(props) {
  return (
    <Box
      height={'100%'}
      paddingTop={'36px'}
      paddingLeft={'12px'}
      background={COLORS.generalWhite}>
      <VStack
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginTop={'24px'}>
        <Text>Home Main Screen</Text>
      </VStack>
    </Box>
  );
}
