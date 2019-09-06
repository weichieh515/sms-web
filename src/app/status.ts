const STATUS: any = {
    pending: {
        colorScheme: 'info',
        text: '處理中',
        color: '#42AAFF'
    },
    accepted: {
        colorScheme: 'primary',
        text: '傳送中',
        color: '#598BFF'
    },
    rejected: {
        colorScheme: 'warning',
        text: '電信拒絕',
        color: '#FFC94D'
    },
    succeed: {
        colorScheme: 'success',
        text: '已成功',
        color: '#2CE69B'
    },
    failed: {
        colorScheme: 'danger',
        text: '已失敗',
        color: '#FF708D'
    }
};
export { STATUS };
