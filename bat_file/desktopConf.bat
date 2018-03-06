cd logstash
cd bin
FOR %%A IN (1) DO (
(logstash -f desktop.conf)
EXIT
)
EXIT