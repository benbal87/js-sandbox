const testObj = {
    51: [
        {
            id: 2,
            name: 'R1',
            project_id: 51,
            project_name: 'Alpha'
        },
        {
            id: 2,
            name: 'R1',
            project_id: 51,
            project_name: 'Alpha'
        },
        {
            id: 2,
            name: 'R1',
            project_id: 51,
            project_name: 'Alpha'
        },
        {
            id: 2,
            name: 'R1',
            project_id: 51,
            project_name: 'Alpha'
        },
        {
            id: 66,
            name: 'R2',
            project_id: 51,
            project_name: 'Alpha'
        }
    ],
    133: [
        {
            id: 3,
            name: 'R3',
            project_id: 133,
            project_name: 'Beta'
        },
        {
            id: 3,
            name: 'R3',
            project_id: 133,
            project_name: 'Beta'
        },
        {
            id: 3,
            name: 'R3',
            project_id: 133,
            project_name: 'Beta'
        },
        {
            id: 3,
            name: 'R3',
            project_id: 133,
            project_name: 'Beta'
        }
    ],
    134: [
        {
            id: 30,
            name: 'R4',
            project_id: 134,
            project_name: 'Gamma'
        },
        {
            id: 66,
            name: 'R5',
            project_id: 134,
            project_name: 'Gamma'
        }
    ]
}

Object.keys(testObj).forEach(key => {
    const array = testObj[key];
    for (let i = 0; i < array.length;) {
        const actualItem = array[i];
        const isItemDuplicated = array.some((item, index) => item.id === actualItem.id && index !== i);
        if (isItemDuplicated) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
});

console.log(JSON.stringify(testObj, null, 4));
