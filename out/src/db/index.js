"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const Result_1 = require("../comm/Result");
const globalConfig_1 = require("../config/globalConfig");
const uuid = require("uuid");
let pool = null;
let getConnection = function () {
    return new Promise((resolve, reject) => {
        try {
            let connection = mysql.createConnection({
                host: globalConfig_1.default.host,
                user: globalConfig_1.default.user,
                password: globalConfig_1.default.password,
                database: globalConfig_1.default.database
            });
            connection.connect(function (err) {
                if (err) {
                    resolve(Result_1.default.fail({ message: err.stack }));
                }
                else {
                    resolve(Result_1.default.success({ data: connection, message: "连接成功" }));
                }
            });
        }
        catch (e) {
            resolve(Result_1.default.fail({ message: e.message }));
        }
    });
};
let getConnectionPool = function () {
    if (!pool) {
        pool = mysql.createPool({
            connectionLimit: globalConfig_1.default.connectionLimit,
            host: globalConfig_1.default.host,
            user: globalConfig_1.default.user,
            password: globalConfig_1.default.password,
            database: globalConfig_1.default.database
        });
    }
    return Result_1.default.success({ data: pool });
};
function query(sqlStr, values = []) {
    return new Promise(async (resolve, reject) => {
        if (!sqlStr) {
            resolve(Result_1.default.fail({ message: "参数错误" }));
            return;
        }
        let res = await getConnection();
        if (res.isSuccess) {
            let connection = res.data;
            connection.query.call(connection, sqlStr, values, function (error, results, fields) {
                if (error) {
                    connection.end();
                    resolve(Result_1.default.fail({ message: error.message }));
                }
                else {
                    connection.end();
                    resolve(Result_1.default.success({
                        data: results,
                        message: "成功"
                    }));
                }
            });
        }
        else {
            resolve(Result_1.default.create(res));
        }
    });
}
function queryOfPool(sqlStr, values = []) {
    return new Promise(async (resolve, reject) => {
        if (!sqlStr) {
            resolve(Result_1.default.fail({ message: "参数错误" }));
            return;
        }
        let res = await getConnectionPool();
        if (res.isSuccess) {
            let pool = res.data;
            pool.getConnection((err, connection) => {
                if (err) {
                    resolve(Result_1.default.fail({ message: err.message }));
                }
                else {
                    connection.query.call(connection, sqlStr, values, function (error, results, fields) {
                        if (error) {
                            connection.release();
                            resolve(Result_1.default.fail({ message: error.message }));
                        }
                        else {
                            connection.release();
                            resolve(Result_1.default.success({
                                data: results,
                                message: "成功"
                            }));
                        }
                    });
                }
            });
        }
        else {
            resolve(Result_1.default.create(res));
        }
    });
}
function insert(sqlStr, values = []) {
    return new Promise(async (resolve, reject) => {
        if (!sqlStr) {
            resolve(Result_1.default.fail({ message: "参数错误" }));
            return;
        }
        let res = await getConnectionPool();
        if (res.isSuccess) {
            let connection = res.data;
            if (typeof sqlStr == "string") {
                sqlStr = sqlStr
                    .replace(/\((\s*[a-zA-Z0-9_]+,)/, "(ID,$1")
                    .replace(/(\?\s*\))/, "?,$1");
            }
            else {
                sqlStr.sql = sqlStr.sql
                    .replace(/\((\s*[a-zA-Z0-9_]+,)/, "(ID,$1")
                    .replace(/(\?\s*\))/, "?,$1");
            }
            let ID = uuid.v1();
            values.unshift(ID);
            connection.query.call(connection, sqlStr, values, function (error, results, fields) {
                if (error) {
                    connection.release();
                    resolve(Result_1.default.fail({ message: error.message }));
                }
                else {
                    connection.release();
                    resolve(Result_1.default.success({
                        data: { results, fields },
                        message: "成功"
                    }));
                }
            });
        }
        else {
            resolve(Result_1.default.create(res));
        }
    });
}
exports.default = {
    getConnection: getConnection,
    query: queryOfPool,
    insert: insert,
};
//# sourceMappingURL=index.js.map