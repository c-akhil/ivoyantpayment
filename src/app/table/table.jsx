import React from 'react';
import { Table } from 'antd';

export default class TableComponet extends React.Component {
    dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            pay: <button>Pay</button>
        }
    ];

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Pay',
            dataIndex: 'pay',
            key: 'pay',
        },
    ];

    render() {
        return <React.Fragment>
            <Table dataSource={this.dataSource} columns={this.columns}
                onCell={
                    (record, rowIndex) => {

                        console.log(rowIndex, record)
                        return {
                            onClick: event => {
                                console.log(event, rowIndex, record)
                            }, // click row

                        };
                    } // click row

                }

                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            console.log(event, rowIndex, record)
                        }, // click row

                    };
                }}
            />
        </React.Fragment>
    }
}