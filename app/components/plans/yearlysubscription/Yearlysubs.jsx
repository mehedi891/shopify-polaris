import { Box, InlineStack } from '@shopify/polaris'
import React from 'react'
import Standardplan from '../planslist/Standardplan'
import Professionalplan from '../planslist/Professionalplan'

function Yearlysubs() {
    return (
        <Box>
            <Box>
                <InlineStack gap={'300'} align='center'>
                   
                    <Box minWidth='40%' maxWidth='48%'>
                        <Standardplan />

                    </Box>


                    <Box minWidth='40%' maxWidth='48%'>

                        <Professionalplan />

                    </Box>



                </InlineStack>
            </Box>
        </Box>
    )
}

export default Yearlysubs