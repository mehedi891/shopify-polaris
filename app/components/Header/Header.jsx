
import { useLocation, useNavigate } from '@remix-run/react';
import { Box, Button, ButtonGroup, Layout, Page, Tabs, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import Announcement from '../announcement/Announcement';

function Header() {

    const navigate = useNavigate();

    const [topBarNavSelect,setTopBarNavSelect] = useState(0);

    const handleTopBarNavSelect = useCallback((index)=>{
            if(topBarNavSelect === index) return
            setTopBarNavSelect(index);
    },[topBarNavSelect]);

    const handleNavigate = useCallback((index)=>{
        if(index === 0){
            navigate('/app');
           }
           else if(index === 1){
            navigate('/app/createruleset');
           }
           else if(index === 2){
            navigate('/app/general-settings');
           }
           else if(index === 3){
            navigate('/app/plans');
           }
           else if(index === 4){
            window.open('https://multivariants.com/docs/shopify-bulk-order/', '_blank').focus();
           }
           else if(index === 5){
            window.open('https://calendly.com/efolisupport/', '_blank').focus();
           }
    },[navigate]);

    const location = useLocation();
    
    return (
        <Page fullWidth>

            <Layout>
            <Layout.Section>
          <Announcement/>
        </Layout.Section>

                <Layout.Section>
                    <Box>
                        <Box borderWidth='0165' background='bg-fill-brand-active' paddingBlock={'200'} paddingInline={'200'} borderRadius='200'>
                           <ButtonGroup variant='segmented' fullWidth>

                                <Button 
                                size='large'
                                pressed={topBarNavSelect === 0}
                                onClick={()=>{handleTopBarNavSelect(0);handleNavigate(0)}}
                                >
                                 View All Ruleset</Button>

                                 <Button
                                size='large'
                                pressed={topBarNavSelect === 1}
                                onClick={()=>{handleTopBarNavSelect(1);handleNavigate(1)}}
                                >Create New Ruleset</Button>

                                <Button
                                size='large'
                                pressed={topBarNavSelect === 2 }
                                onClick={()=>{handleTopBarNavSelect(2);handleNavigate(2)}}
                                >
                                General Settings</Button>

                                <Button
                                size='large'
                                pressed={topBarNavSelect === 3 }
                                onClick={()=>{handleTopBarNavSelect(3);handleNavigate(3)}}
                                >Plans</Button>

                                <Button
                                size='large'
                                pressed={topBarNavSelect === 4}
                                onClick={()=>{handleTopBarNavSelect(4);handleNavigate(4)}}
                                >Help</Button>

                                <Button
                                size='large'
                                pressed={topBarNavSelect === 5}
                                onClick={()=>{handleTopBarNavSelect(5);handleNavigate(5)}}
                                >Schedule a call</Button>

                           </ButtonGroup>
                        </Box>
                    </Box>
                </Layout.Section>
            </Layout>
        </Page>

    )
}

export default Header