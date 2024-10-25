import { Box, InlineStack } from '@shopify/polaris'
import React from 'react'
import Starterplan from '../planslist/Starterplan'
import Standardplan from '../planslist/Standardplan'
import Professionalplan from '../planslist/Professionalplan'

function MonthlySubs() {
    return (
        <Box>
            <Box>
                <InlineStack gap={'300'} align='space-between'>
                    <Box maxWidth='360px'>
                       
                        <Starterplan/>
                    </Box>



                    <Box maxWidth='360px'>
                       <Standardplan/>

                    </Box>


                    <Box maxWidth='360px'>

                        <Professionalplan/>

                    </Box>



                </InlineStack>
            </Box>
        </Box>
    )
}

export default MonthlySubs