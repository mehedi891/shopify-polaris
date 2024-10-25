import { ActionList, Box, Button, Icon, Popover } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { DeleteIcon, DisabledIcon, ExportIcon, ImportIcon, MenuHorizontalIcon, ViewIcon } from '@shopify/polaris-icons';
import { useNavigate } from '@remix-run/react';





function TableSingleItemAction({id,ruleSetTone}) {

    //console.log(id)

    const handleActiveDeactive = (ruleSetTone) =>{
        console.log(ruleSetTone)
    }
    const handleNavigate = (id) =>{
        navigate(`/app/ruleset/${id}`);
    }
    const [active, setActive] = useState(false);

    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const activator = (
        <Button onClick={toggleActive} icon={MenuHorizontalIcon} variant='plain'>
           
        </Button>
    );

    const navigate = useNavigate();

   
    
    return (
  


     <div style={{height: 'auto'}}>
      <Popover
        active={active}
        activator={activator}
        autofocusTarget="first-node"
        onClose={toggleActive}
      >
        <ActionList
          actionRole="menuitem"
          sections={[
            {
              title: 'Ruleset options',
              items: [
                {
                  active: false,
                  content: <Button onClick={()=> handleNavigate(id)}  variant='monochromePlain' icon={ViewIcon}>View Details</Button>,
                 // icon: ViewIcon,
                  
                },
                // {content: 'Export file', icon: ExportIcon},
                {
                  destructive: true,
                  content: <Button onClick={()=> handleActiveDeactive(ruleSetTone)}  variant='monochromePlain' icon={DisabledIcon}>Deactivate</Button>,
                  //icon: DeleteIcon,
                },
              ],
            },
          ]}
        />
      </Popover>
    </div>
    )
}

export default TableSingleItemAction