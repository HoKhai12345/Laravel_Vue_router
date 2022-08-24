<template>
    <table class="table align-items-center mb-0">
        <thead>
        <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Name
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                Email
            </th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                CreatedAt
            </th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                UpdatedAt
            </th>
            <th class="text-secondary opacity-7"></th>
        </tr>
        </thead>
        <tbody v-for="item in listData">
        <tr>
            <td>
                <div class="d-flex px-2 py-1">
                    <div>
                        <!--                                                    <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user6">-->
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{item.name}}</h6>
                        <p class="text-xs text-secondary mb-0">
                            {{item.email}}</p>
                    </div>
                </div>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">{{item.email}}</p>
                <!--                                                    <p class="text-xs text-secondary mb-0">Developer</p>-->
            </td>
            <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-secondary">{{item.created_at}}</span>
            </td>
            <td class="align-middle text-center">
                                                    <span
                                                        class="text-secondary text-xs font-weight-bold">{{item.updated_at}}</span>
            </td>
            <td class="align-middle">
                <a href="javascript:;"
                   class="text-secondary font-weight-bold text-xs"
                   data-toggle="tooltip" data-original-title="Edit user">
                    Edit
                </a>
            </td>
        </tr>
        </tbody>
    </table></template>

<script>
    export default {
        name: 'Table',
        props: {
            listData: Array
        }

    }
</script>
