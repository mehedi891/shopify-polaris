import { Box, Layout, Text, Page, Card, DataTable, Badge, IndexTable, useIndexResourceState, AccountConnection, BlockStack, Bleed, Button, Icon, IndexFilters } from "@shopify/polaris";
import Announcement from "../components/announcement/Announcement";
import { DeleteIcon, MenuHorizontalIcon } from '@shopify/polaris-icons';
import { useState } from "react";
import { orders } from "../order-data";
import Footer from "../components/footer/Footer";
import TableSingleItemAction from "../components/Table/TableSingleItemActions/TableSingleItemAction";
import { useNavigate } from "@remix-run/react";





export default function Index() {

  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);



  const bulkActions = [
    {
      content: "View Details",
      onAction: () => { console.log('from View Details') }
    },
    {
      content: "Actived Rulesets",
      onAction: () => { console.log('from View Actived Rulesets') }
    },
    {
      content: "Deactivated Rulesets",
      onAction: () => { console.log('from View Deactivated Rulesets') }
    },
    {
      icon: DeleteIcon,
      destructive: true,
      content: 'Delete Ruleset',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];


  const rowMarkup = orders.map(
    (
      { id, rTitle, ruleSetTone, appliedFor },
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell >
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {rTitle}
          </Text>
        </IndexTable.Cell>

        <IndexTable.Cell>
          <Badge tone={ruleSetTone}>Active</Badge>
        </IndexTable.Cell>

        <IndexTable.Cell className="table-maxWidth" ><Text as="p" variant="bodyMd" alignment="center" breakWord={true}>{appliedFor}</Text></IndexTable.Cell>

        <IndexTable.Cell>
          {'empty'}
        </IndexTable.Cell>


        <IndexTable.Cell>
          <TableSingleItemAction key={id} id={id} ruleSetTone={ruleSetTone}></TableSingleItemAction>
        </IndexTable.Cell>


      </IndexTable.Row>
    ),
  );


  const navigate = useNavigate();

  const handleNavigateCreateRuleset = () =>{
    navigate('/app/createruleset');
  }

  return (
    <Page fullWidth

      title="Ruleset Listing"
      primaryAction={<Button onClick={handleNavigateCreateRuleset} variant="primary">Create new Ruleset</Button>}
    >
      <Layout>

        <Layout.Section>

          <IndexTable

            resourceName={resourceName}
            itemCount={orders.length}
            selectedItemsCount={
              allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              { title: 'Ruleset Title', alignment: 'start', },
              { title: 'Status', alignment: 'start', },
              { title: 'Applied for', alignment: 'center', },
              { title: 'Total', },
              { title: 'More', alignment: 'start', },

            ]}
            pagination={{
              hasNext: true,
              onNext: () => { console.log('next page') }
            }}

            bulkActions={bulkActions}

          >
            {rowMarkup}
          </IndexTable>
        </Layout.Section>
      </Layout>

      {/* <Footer></Footer> */}

    </Page>
  );
}







