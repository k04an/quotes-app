module.exports = {
    getAppeal: () => {
        let appealList = [
            'pal',
            'buddy',
            'mate',
            'friend',
            'champ',
            'bro',
        ]

        return appealList[Math.round(Math.random() * (appealList.length - 1))]
    },

    getColor: () => {
        let colorList = [
            '#EA1179',
            '#E8FFCE',
            '#6528F7',
            '#4E4FEB',
            '#A2FF86',
            '#F86F03',
            '#47A992'
        ]

        return colorList[Math.round(Math.random() * (colorList.length - 1))]
    }
}