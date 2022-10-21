import React from 'react';
import {Box, Text, VStack} from 'native-base';
import {COLORS} from '../../utils/Colors';

export default function HomeProfileScreen(props) {
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
        <Text>Home Profile Screen</Text>
      </VStack>
    </Box>
  );
}
