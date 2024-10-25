import { Box, Divider, InlineStack, Text } from '@shopify/polaris'
import React from 'react'

import efl_logo from '../../../images/efoli-logo.jpeg'

function FooterMv() {
    return (
        <Box paddingBlockStart={'500'}>
            <Divider borderWidth='050' borderColor='border-brand' />

            <Box paddingBlockStart={'200'} paddingBlockEnd={'400'}>
                <InlineStack blockAlign='center' align='space-between'>
                    <Box>
                        <InlineStack blockAlign='center' gap={'050'}>
                        <img
                            width='auto'
                            height='52px'
                           src="https://multivariants.com/wp-content/themes/multivariants/resources/images/MV.webp" alt="Multivariants" />
                           <Text as='p' variant='bodyMd'>Multivariants - Bulk Order</Text>
                        </InlineStack>
                        
                    </Box>


                    <Box>
                        <InlineStack>
                            <Box borderInlineEndWidth='025' paddingInlineEnd={'200'}>
                                <InlineStack blockAlign='center' gap={'050'}>
                                <Text as='p' variant='bodyMd'>Powered by</Text>
                                <img src={efl_logo} alt="efoli"  height='20px' width={'auto'}/>
                                </InlineStack>
                            </Box>

                            <Box borderInlineEndWidth='025' paddingInlineEnd={'200'} paddingInlineStart={'200'}>
                                <InlineStack blockAlign='center' gap={'050'}>
                                <Text as='p' variant='bodyMd'>Version 2.0.0</Text>
                                </InlineStack>
                            </Box>

                            <Box paddingInlineEnd={'200'} paddingInlineStart={'200'}>
                                <InlineStack blockAlign='center' gap={'050'}>
                                <Text as='p' variant='bodyMd'>Package - Sarter</Text>
                                </InlineStack>
                            </Box>

                        </InlineStack>
                    </Box>

                </InlineStack>
            </Box>

        </Box>
    )
}

export default FooterMv