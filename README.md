## Denk Pharma QME Hub



### Cronjobs / Scheduler-Tasks

[Siehe Crontab File](dev/dockerprovisioning/app/etc/cronDev/crontab)

Live Cronjobs:

	* * * * * FLOW_CONTEXT="Production/MaxClusterLive" /usr/bin/php8.4 /var/www/share/default/current/flow timeablenodevisibility:execute &>> /var/www/share/default/current/Data/Logs/Cron.log


### Development

```bash
FLOW_CONTEXT="Production/MaxClusterLive" ./flow flow:cache:flush && FLOW_CONTEXT="Production/MaxClusterLive" ./flow flow:cache:warmup
```

```bash
FLOW_CONTEXT="Production/MaxClusterLive" ./flow subscription:replay Neos.Neos:DocumentUriPathProjection
```

```bash
FLOW_CONTEXT="Production/MaxClusterLive" ./flow subscription:replayAll
```
