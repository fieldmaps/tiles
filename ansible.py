import subprocess

if __name__ == '__main__':
    subprocess.run([
        'ansible-playbook',
        'ansible/playbook.yml',
        '-i', 'ansible/inventory.ini'
    ])
