export const sampleDataReduction = (data, option, show) => {
    let sampledData = [];
    let tempData = [];
    const dataLength = data.length;

    if (dataLength === 0) return sampledData;

    const timeUnits = {
        millisecond: 1,
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        quarter: 90 * 24 * 60 * 60 * 1000,
        year: 365 * 24 * 60 * 60 * 1000
    };
    const selectedMultiplier = timeUnits[option];
    const endDate = new Date(data[dataLength - 1].x);
    const firstData = new Date(data[0].x);
    const calculatedDate = new Date(endDate.getTime() - show * selectedMultiplier);
    const startDate = firstData.getTime() > calculatedDate.getTime() ? firstData : calculatedDate;
    tempData = data.filter((item) => new Date(item.x) >= startDate);
    const tempLen = tempData.length;
    if (option === 'minute' || option === 'second' || option === 'millisecond') {
        if (tempLen < show) {
            const endDate = new Date(data[data.length - 1].x);
            const startDate = new Date(endDate);
            startDate.setHours(endDate.getHours() - 4);
            tempData = data.filter((item) => new Date(item.x) >= startDate);
        }
        return tempData;
    } else if (option === 'day' || option === 'hour') {
        return tempData;
    } else if (option === 'week' || option === 'month' || option === 'quarter' || option === 'year') {
        const sliceUnits = {
            week: 7,
            month: 30,
            quarter: 90,
            year: 365 / 2
        };
        const selectedSlicer = parseInt(sliceUnits[option]);
        for (let i = 0; i < tempLen; i += selectedSlicer) {
            const range = tempData.slice(i, i + selectedSlicer);
            const rangeAverage = range.reduce((sum, value) => sum + value.y, 0) / range.length;
            sampledData.push({ x: range[0].x, y: rangeAverage });
        }
        return sampledData;
    }
    return data;
};

export const sampleDataReductionByArray = (data, option, show) => {
    let sampledData = [];
    const dataLength = data.length;

    if (dataLength === 0) return sampledData;

    const timeUnits = {
        millisecond: 1,
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        quarter: 90 * 24 * 60 * 60 * 1000,
        year: 365 * 24 * 60 * 60 * 1000
    };
    const selectedMultiplier = timeUnits[option];
    const endDate = new Date(data[dataLength - 1].x);
    const firstData = new Date(data[0].x);
    const calculatedDate = new Date(endDate.getTime() - show * selectedMultiplier);
    const startDate = firstData.getTime() > calculatedDate.getTime() ? firstData : calculatedDate;
    let tempData = data.filter((item) => new Date(item.x) >= startDate);
    const tempLen = tempData.length;

    if (option === 'minute' || option === 'second' || option === 'millisecond') {
        if (tempLen < show) {
            const endDate = new Date(data[data.length - 1].x);
            const startDate = new Date(endDate);
            startDate.setHours(endDate.getHours() - 4);
            tempData = data.filter((item) => new Date(item.x) >= startDate);
        }
        return tempData;
    } else if (option === 'day' || option === 'hour') {
        return tempData;
    } else if (option === 'week' || option === 'month' || option === 'quarter' || option === 'year') {
        const sliceUnits = {
            week: 7,
            month: 30,
            quarter: 90,
            year: 365 / 2
        };
        const selectedSlicer = parseInt(sliceUnits[option]);
        for (let i = 0; i < tempLen; i += selectedSlicer) {
            sampledData.push(tempData[i]);
        }
        return sampledData;
    }
    return data;
};

export const sampleDataByFixedLength = (data, option, show) => {
    let sampledData = [];
    const dataLength = data.length;

    if (dataLength === 0) return sampledData;

    const timeUnits = {
        millisecond: 'millisecond',
        second: 'second',
        minute: 'minute',
        hour: 'hour',
        day: 'day',
        week: 'week',
        month: 'month',
        quarter: 'quarter',
        year: 'year'
    };

    if (!timeUnits[option]) return data;

    const parseDate = (dateStr) => new Date(dateStr);

    const average = (arr) => {
        if (arr.length === 0) return 0;
        if (typeof arr[0] === 'number') {
            return arr.reduce((acc, val) => acc + val, 0) / arr.length;
        } else {
            const length = arr[0].length;

            const avgArr = [];
            Array(length)
                .fill(null)
                .forEach((_, i) => {
                    const val = arr.map((data) => Number(data[i])).reduce((acc, val) => acc + val, 0) / arr.length;
                    avgArr.push(val);
                });
            return avgArr;
        }
    };

    let tempData = [];
    let currentUnit = null;

    for (let i = dataLength - 1; i >= 0; i--) {
        const dataPoint = data[i];
        const date = parseDate(dataPoint.x);

        let unit = null;
        if (option === 'day') {
            unit = Math.floor(date.getTime() / (24 * 60 * 60 * 1000));
        } else if (option === 'week') {
            unit = Math.floor(date.getTime() / (7 * 24 * 60 * 60 * 1000));
        } else if (option === 'month') {
            unit = date.getFullYear() * 12 + date.getMonth();
        } else if (option === 'year') {
            unit = date.getFullYear();
        } else if (option === 'hour') {
            unit = Math.floor(date.getTime() / (60 * 60 * 1000));
        } else if (option === 'minute') {
            unit = Math.floor(date.getTime() / (60 * 1000));
        } else if (option === 'second') {
            unit = Math.floor(date.getTime() / 1000);
        } else if (option === 'millisecond') {
            unit = Math.floor(date.getTime() / 1);
        } else if (option === 'quarter') {
            unit = date.getFullYear() * 4 + Math.floor(date.getMonth() / 3);
        }

        if (currentUnit === null) {
            currentUnit = unit;
        }

        if (unit !== currentUnit) {
            const avgValues = average(tempData.map((item) => item.y));
            sampledData.unshift({ x: tempData[0].x, y: avgValues });
            tempData = [];
            currentUnit = unit;
        }

        tempData.push(dataPoint);

        if (sampledData.length >= show) {
            break;
        }
    }

    if (tempData.length > 0) {
        const avgValues = average(tempData.map((item) => item.y));
        sampledData.unshift({ x: tempData[0].x, y: avgValues });
    }
    if (['week', 'month', 'quarter'].includes(option)) {
        const days = {
            week: 7,
            month: 30,
            quarter: 90
        };
        const dayCn = 24 * 60 * 60 * 1000;
        if (new Date(sampledData[sampledData.length - 1].x).getTime() / dayCn - new Date(sampledData[sampledData.length - 2].x).getTime() / dayCn < days[option]) {
            sampledData.pop();
        } else {
            sampledData.shift();
        }
    }
    return sampledData;
};

export const generateRandomData = (startDate, endDate, intervalHours, minValue, maxValue) => {
    let data = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        const currentValue = minValue + Math.random() * (maxValue - minValue);

        data.push({ x: new Date(currentDate), y: parseFloat(currentValue.toFixed(2)) });

        currentDate = new Date(currentDate.getTime() + intervalHours * 60 * 60 * 1000);
    }

    return data;
};

export const generateRandomMultiData = (startDate, endDate, intervalHours, minValue, maxValue, datasetsCount = 2, inter = false) => {
    let data = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        let currentValues;
        if (inter) {
            let incr = maxValue;
            currentValues = Array(datasetsCount)
                .fill(null)
                .map((_, i) => {
                    return (minValue + Math.random() * (maxValue - minValue) + incr * (datasetsCount - i * 1.2)).toFixed(0);
                });
        } else {
            currentValues = Array(datasetsCount)
                .fill(null)
                .map(() => {
                    return (minValue + Math.random() * (maxValue - minValue)).toFixed(0);
                });
        }
        data.push({ x: new Date(currentDate), y: [...currentValues] });

        currentDate = new Date(currentDate.getTime() + intervalHours * 60 * 60 * 1000);
    }
    return data;
};
