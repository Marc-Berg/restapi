module.exports = function(RED) {
    function ioBConfig(n) {
        RED.nodes.createNode(this, n);
        this.iobhost = n.iobhost;
        this.iobport = n.iobport;
        this.user = n.user;
        this.password = n.password;
    }
    RED.nodes.registerType("iob-config", ioBConfig);
};
