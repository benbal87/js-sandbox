let statusesOfExperts =
  [
    {
      "id": 1,
      "online": false
    },
    {
      "id": 2,
      "online": false
    },
    {
      "id": 3,
      "online": true
    },
    {
      "id": 4,
      "online": false
    },
    {
      "id": 5,
      "online": false
    },
  ]

let experts =
  [
    {
      "id": 1,
      "online": true
    },
    {
      "id": 2,
      "online": true
    },
    {
      "id": 3,
      "online": true
    },
    {
      "id": 4,
      "online": true
    },
    {
      "id": 5,
      "online": true
    },
  ]



function check() {
  console.log('experts 1 ', experts)

  let expertsWithNewStatuses = [...experts]

  experts.map((expert) => {
    let isExpertOnline = statusesOfExperts.find((expertStatus) => expertStatus.id === expert.id).online
    expert.online = isExpertOnline
  })

  experts = expertsWithNewStatuses

  // let expertIds = experts.map(expert => expert.liveAssistId)

  console.log('experts 2 ', experts)
}

check()
