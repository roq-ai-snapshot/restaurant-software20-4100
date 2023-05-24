import AppLayout from 'layout/app-layout';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { Spinner } from '@chakra-ui/react';
import { getMenuItems } from 'apiSdk/menu-items';
import { MenuItemsInterface } from 'interfaces/menu-items';
import { Error } from 'components/error';

function MenuItemsListPage() {
  const { data, error, isLoading } = useSWR<MenuItemsInterface[]>(() => true, getMenuItems);

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Menu Items
      </Text>
      <Box bg="white" p={4} rounded="md" shadow="md">
        {error && <Error error={error} />}
        {isLoading ? (
          <Spinner />
        ) : (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Restaurant Id</Th>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Image Url</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((record) => (
                  <Tr key={record.id}>
                    <Td>{record.id}</Td>
                    <Td>{record.restaurant_id}</Td>
                    <Td>{record.name}</Td>
                    <Td>{record.description}</Td>
                    <Td>{record.price}</Td>
                    <Td>{record.image_url}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </AppLayout>
  );
}
export default MenuItemsListPage;
