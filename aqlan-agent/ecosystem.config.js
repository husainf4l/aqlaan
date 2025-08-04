module.exports = {
    apps: [
        {
            name: 'aqlan-agent',
            script: 'production.py',
            interpreter: './venv/bin/python',
            cwd: '/home/husain/aqlaan/aqlan-agent',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            args: '--host 0.0.0.0 --port 8001 --no-reload',
            env: {
                NODE_ENV: 'production',
                PYTHONPATH: '/home/husain/aqlaan/aqlan-agent'
            },
            env_development: {
                NODE_ENV: 'development',
                PYTHONPATH: '/home/husain/aqlaan/aqlan-agent'
            },
            log_file: './logs/combined.log',
            out_file: './logs/out.log',
            error_file: './logs/error.log',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            merge_logs: true
        }
    ]
};
